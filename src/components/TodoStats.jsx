import { Flex, Tag } from "antd";

function TodoStats({ todos }) {
  const total = todos.length;
  const done = todos.filter((todo) => todo.isDone).length;
  const remaining = total - done;
  return (
    <Flex className="stats-container" gap="8px" style={{ margin: "1em 0" }}>
      <Tag color="gray" varaint="filled">
        Total {total}
      </Tag>
      <Tag color="green" varaint="filled">
        Done {done}
      </Tag>
      <Tag color="geekblue" varaint="filled">
        Remaining {remaining}
      </Tag>
    </Flex>
  );
}

export default TodoStats;
