# TypeScript para Algoritmos (desde Java/Kotlin)

## Requisitos previos

Este proyecto usa [mise](https://mise.jdx.dev/) para gestionar la versión de Node. Una vez instalado, ejecuta:

```bash
mise install
```

## Ejecutar el proyecto
```bash
npm install      # instala las dependencias
npm start        # ejecuta src/main.ts
npm run dev      # modo watch (re-ejecuta al guardar)
```

## Correr los tests
```bash
npm test                # modo watch (re-corre al guardar)
npm test -- --run       # corre una sola vez
```

Los tests están junto a cada algoritmo en `src/algorithms/`:
```
src/
  algorithms/
    helloWorld.ts
    helloWorld.test.ts
```

---

## Tipos primitivos
| Java/Kotlin | TypeScript |
|---|---|
| `int`, `Integer`, `long`, `double` | `number` |
| `boolean` | `boolean` |
| `String`, `Char` | `string` |
| `void` | `void` |
| `null` | `null` / `undefined` |

---

## Variables
```typescript
const x = 5;    // inmutable — equivale a val en Kotlin (preferir siempre)
let y = 10;     // mutable   — equivale a var en Kotlin
// NO usar var (scope raro, evitarlo)
```

---

## Arrays
```typescript
const arr: number[] = [1, 2, 3];
arr.push(4);           // agregar al final
arr.pop();             // eliminar del final
arr.shift();           // eliminar del inicio (O(n))
arr.unshift(0);        // insertar al inicio (O(n))
arr.length;            // tamaño — NO .size()
arr[0];                // acceso por índice
arr.includes(3);       // contiene? — equivale a .contains()
arr.indexOf(3);        // primer índice, -1 si no existe
arr.slice(1, 4);       // subarreglo [1..3], NO modifica el original
arr.splice(1, 2);      // elimina 2 elementos desde índice 1 (modifica el original)

// Inicializar array de tamaño n con ceros
const zeros = new Array(n).fill(0);

// Matriz 2D de m filas x n columnas
const grid = Array.from({ length: m }, () => new Array(n).fill(0));
```

---

## ⚠️ Trampa clásica: `.sort()` es LEXICOGRÁFICO por defecto
```typescript
// INCORRECTO (como si fuera string)
[10, 2, 1].sort();           // → [1, 10, 2]  ← TRAMPA!

// CORRECTO para números
[10, 2, 1].sort((a, b) => a - b);   // → [1, 2, 10]  ascendente
[10, 2, 1].sort((a, b) => b - a);   // → [10, 2, 1]  descendente

// Ordenar strings (sí funciona directo)
["banana", "apple"].sort();          // → ["apple", "banana"]
```

---

## Strings
```typescript
const s = "hello";
s.length;                  // tamaño
s[0];                      // acceso por índice (char como string)
s.charAt(0);               // igual que s[0]
s.charCodeAt(0);           // código ASCII — equivale a s[0].code en Kotlin
String.fromCharCode(97);   // 'a' — equivale a 'a'.code en Kotlin

s.split("");               // → ['h','e','l','l','o']  string a array de chars
s.split(" ");              // separar por espacios
arr.join("");              // array a string

s.includes("ell");         // contiene?
s.startsWith("he");
s.endsWith("lo");
s.indexOf("l");            // primera aparición
s.slice(1, 3);             // substring [1..2]
s.toUpperCase();
s.toLowerCase();
s.trim();                  // quitar espacios al inicio/fin
s.repeat(3);               // "hellohellohello"
s.replace("l", "r");       // reemplaza solo la primera ocurrencia
s.replaceAll("l", "r");    // reemplaza todas las ocurrencias

// Strings son inmutables — para construir uno, usa array + join
const parts: string[] = [];
parts.push("a");
parts.push("b");
const result = parts.join(""); // "ab"
```

---

## Estructuras de datos

### Map (≈ HashMap)
```typescript
const map = new Map<string, number>();
map.set("a", 1);
map.get("a");             // 1 | undefined
map.has("a");             // true
map.delete("a");
map.size;                 // NO .length
map.clear();

// Iterar
for (const [key, value] of map) { }
map.keys();
map.values();

// Frecuencia de caracteres (patrón muy común)
const freq = new Map<string, number>();
for (const c of s) {
    freq.set(c, (freq.get(c) ?? 0) + 1);
}
```

### Set (≈ HashSet)
```typescript
const set = new Set<number>();
set.add(1);
set.has(1);
set.delete(1);
set.size;

for (const val of set) { }
```

### Stack (usar Array)
```typescript
const stack: number[] = [];
stack.push(1);             // push
stack[stack.length - 1];  // peek
stack.pop();               // pop
stack.length === 0;        // isEmpty
```

### Queue (usar Array — o una deque con librería)
```typescript
// Simple pero O(n) en shift — suficiente para la mayoría de problemas
const queue: number[] = [];
queue.push(1);     // enqueue
queue.shift();     // dequeue O(n) ⚠️

// Para BFS con muchos nodos, considera un índice puntero en vez de shift:
let head = 0;
const q: number[] = [];
q.push(start);
while (head < q.length) {
    const node = q[head++];
    // procesar node...
}
```

### Priority Queue / Heap
TypeScript no tiene PriorityQueue nativa. Para algoritmos que la necesiten:
- Implementar un min-heap manualmente, o
- Usar la librería `@datastructures-js/priority-queue` (instalar con `npm i`)

---

## Funciones
```typescript
function suma(a: number, b: number): number {
    return a + b;
}

// Arrow function
const suma = (a: number, b: number): number => a + b;
```

---

## Loops
```typescript
for (let i = 0; i < n; i++) { }
for (let i = n - 1; i >= 0; i--) { }    // reversa
for (const item of arr) { }              // for-each
for (const [i, item] of arr.entries()) { } // con índice

// Mientras
while (condition) { }
```

---

## Destructuring (muy útil en algoritmos)
```typescript
// Array
const [a, b] = [1, 2];
const [first, ...rest] = arr;

// Swap sin variable temporal
[arr[i], arr[j]] = [arr[j], arr[i]];

// Object
const { length } = arr;   // equivale a val length = arr.length
```

---

## Tipos y utilidades matemáticas
```typescript
Math.max(a, b);
Math.min(a, b);
Math.floor(3.7);          // → 3
Math.ceil(3.2);           // → 4
Math.round(3.5);          // → 4
Math.abs(-5);             // → 5
Math.sqrt(9);             // → 3
Math.pow(2, 10);          // → 1024
Math.log2(8);             // → 3

// Entero desde string
parseInt("42");            // → 42
parseInt("42abc");         // → 42 (toma lo que pueda)
Number("42");              // → 42
Number("42abc");           // → NaN ⚠️

// Límites
Number.MAX_SAFE_INTEGER;   // 2^53 - 1 (~9 cuatrillones)
Number.MIN_SAFE_INTEGER;
Infinity;                  // útil para inicializar min/max
-Infinity;

// BigInt — para números que superan 2^53
const big = 100n;
const sum = 100n + 200n;   // operaciones solo entre BigInt
```

---

## Interfaces / tipos personalizados
```typescript
// Para nodos de grafos, listas enlazadas, etc.
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

interface ListNode {
    val: number;
    next: ListNode | null;
}

// Type alias (alternativa más simple)
type Point = { x: number; y: number };
```

---

## Operadores útiles
```typescript
// Nullish coalescing — equivale a ?: en Kotlin
const val = map.get(key) ?? 0;   // si es null/undefined, usa 0

// Optional chaining
const n = node?.next?.val;        // no lanza error si node es null

// Operador de bits (útil en algunos algoritmos)
n >> 1;        // división entera entre 2
n << 1;        // multiplicar por 2
n & 1;         // es impar? (1 = impar, 0 = par)
n ^ m;         // XOR
~n;            // NOT bit a bit
```

---

## Diferencias clave con Java/Kotlin (resumen)
| Concepto | Java/Kotlin | TypeScript |
|---|---|---|
| Comparación de valores | `.equals()` | `===` |
| Imprimir | `println()` | `console.log()` |
| Tamaño de colección | `.size()` / `.size` | `.length` / `.size` |
| Cast | `(int) x` | `Math.floor(x)` o `x as number` |
| Ternario | `a ? b : c` | `a ? b : c` (igual) |
| No nulo garantizado | `!!` en Kotlin | `!` (non-null assertion) |
| Overflow de enteros | sí (int es 32 bits) | no (number es float 64 bits) |
