import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
});

test("adds a new todo", async () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("New Todo");
  const addButton = screen.getByText("Add");

  await userEvent.type(input, "Test Todo");
  fireEvent.click(addButton);

  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText("Delete");
  const firstDelete = deleteButtons[0];

  fireEvent.click(firstDelete);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
