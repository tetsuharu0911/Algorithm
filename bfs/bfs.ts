import { Queue } from './Queue';

type Graph = {[key: string]: string[]};

const bfs = (graph: Graph, start: string) => {
  let visited = new Set<string>();
  let queue = new Queue<string>();

  visited.add(start);
  queue.enqueue(start);

  while (!queue.isEmpty()) {
    let currentNode = queue.dequeue();

    if (currentNode === undefined) {
      continue;
    }

    console.log(`Visited: ${currentNode}`);

    let neighbors = graph[currentNode];

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
};

// グラフの定義
const graph: Graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['F'],
  'F': []
};

// アルゴリズムの実行
bfs(graph, 'A');
