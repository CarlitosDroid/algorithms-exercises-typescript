const _buf: string[] = [];

export function println(value: unknown = ''): void {
    _buf.push(String(value));
}

export function flush(): void {
    console.log(_buf.join('\n'));
    _buf.length = 0;
}

process.on('exit', flush);
