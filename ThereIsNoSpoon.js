/*
The program must first read the initialization data from standard input. Then, provide to the standard output one line per instruction.
Initialization input
Line 1: one integer width for the number of cells along the x axis.

Line 2: one integer height for the number of cells along the y axis.

Next height lines: A string  line  containing  width  characters. A dot . represents an empty cell. A zero 0 represents a cell containing a node.

Output for one game turn
One line per node. Six integers on each line:   x1  y1  x2  y2  x3  y3

Where:
(x1,y1) the coordinates of a node
(x2,y2) the coordinates of the closest neighbor on the right of the node
(x3,y3) the coordinates of the closest bottom neighbor
If there is no neighbor, the coordinates should be -1 -1.
*/
const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
const nodes = [];
const nodesOnXTable = {};
for (let i = 0; i < width; i++) nodesOnXTable[i] = [];
for (let i = 0; i < height; i++) {
    const line = readline(); // width characters, each either 0 or .
    let foundNodeOnThisLine = false;
    for (let j = 0; j < width; j++) {
        if (line[j] === '0') {
            const node = { x1: j, y1: i };
            nodes.push(node);
            nodesOnXTable[j].push(node);
            if (foundNodeOnThisLine) {
                nodes[nodes.length - 2].x2 = j;
                nodes[nodes.length - 2].y2 = i;
            } else {
                foundNodeOnThisLine = true;
            }
        } else {
            nodesOnXTable[j].push(undefined);
        }
    }
}

for (let i = 0; i < nodes.length; i++) {
    const bottomNeighbor = getBottomNeighbor(nodes[i]);
    nodes[i].x3 = -1;
    nodes[i].y3 = -1;
    if (bottomNeighbor) {
        nodes[i].x3 = bottomNeighbor.x1;
        nodes[i].y3 = bottomNeighbor.y1;
    }
    nodes[i].x2 = nodes[i].x2 === undefined ? -1 : nodes[i].x2;
    nodes[i].y2 = nodes[i].y2 === undefined ? -1 : nodes[i].y2;
    console.log(`${nodes[i].x1} ${nodes[i].y1} ${nodes[i].x2} ${nodes[i].y2} ${nodes[i].x3} ${nodes[i].y3}`);
}

function getBottomNeighbor(node) {
    const nodesOnX = nodesOnXTable[node.x1];
    for (let i = node.y1 + 1; i < height; i++) {
        if (nodesOnX[i]) return nodesOnX[i];
    }
}
