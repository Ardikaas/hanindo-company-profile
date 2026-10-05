import { useCallback, useEffect, useState } from "react";
import { api, errorMessage } from "../lib/api";
export default function useResource(url, client = api) {
  const [state, setState] = useState({
    data: null,
    meta: null,
    loading: true,
    error: "",
  });
  const [revision, setRevision] = useState(0);
  const reload = useCallback(() => setRevision((n) => n + 1), []);
  useEffect(() => {
    const controller = new AbortController();
    setState({ data: null, meta: null, loading: true, error: "" });
    client
      .get(url, { signal: controller.signal })
      .then((res) => {
        if (!controller.signal.aborted)
          setState({ ...res.data, loading: false, error: "" });
      })
      .catch((error) => {
        if (!controller.signal.aborted)
          setState({
            data: null,
            meta: null,
            loading: false,
            error: errorMessage(error),
          });
      });
    return () => controller.abort();
  }, [url, revision, client]);
  return { ...state, reload };
}
