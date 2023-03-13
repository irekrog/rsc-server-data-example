import { useNode } from "use-node";

const UseNode = async () => {
  const process = await useNode("node:process");

  return (
    <div>
      <h1>Use Node</h1>
      <p>Node Version: {process.version}</p>
    </div>
  );
};

export default UseNode;
