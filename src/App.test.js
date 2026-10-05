import { fireEvent, render, screen } from "@testing-library/react";
import ContentState from "./components/ContentState";
import Pagination from "./components/Pagination";

test("a failed content request offers retry instead of showing an empty collection", () => {
  const reload = jest.fn();
  render(
    <ContentState
      resource={{ loading: false, error: "Server offline", data: null, reload }}
      empty="Belum ada konten"
    />,
  );
  expect(screen.getByRole("alert")).toHaveTextContent("Server offline");
  expect(screen.queryByText("Belum ada konten")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Coba lagi" }));
  expect(reload).toHaveBeenCalledTimes(1);
});

test("an empty published collection remains empty", () => {
  render(
    <ContentState
      resource={{ loading: false, error: "", data: [] }}
      empty="Belum ada sertifikat"
    />,
  );
  expect(screen.getByText("Belum ada sertifikat")).toBeInTheDocument();
});

test("pagination prevents navigating beyond the first and last pages", () => {
  const onChange = jest.fn();
  const { rerender } = render(
    <Pagination meta={{ pages: 2, total: 14 }} page={1} onChange={onChange} />,
  );
  expect(screen.getByRole("button", { name: "Sebelumnya" })).toBeDisabled();
  fireEvent.click(screen.getByRole("button", { name: "Berikutnya" }));
  expect(onChange).toHaveBeenCalledWith(2);
  rerender(
    <Pagination meta={{ pages: 2, total: 14 }} page={2} onChange={onChange} />,
  );
  expect(screen.getByRole("button", { name: "Berikutnya" })).toBeDisabled();
});
