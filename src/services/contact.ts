import { readFile, writeFile } from "node:fs/promises";

const dataSource = './data/list.txt';

export const getContatos = async () => {
    let list: string[] = [];
        try {
            const data = await readFile(dataSource, { encoding: 'utf-8'});
            list = data.split('\n');
        } catch(err) { }

        return list;
}

export const creatContact = async (name: string) => {
    let list = await getContatos();
    list.push(name);
    await writeFile(dataSource, list.join('\n'));
}

export const deleteContact = async (name: string) =>{
    let list = await getContatos();

    list = list.filter(item => item.toLowerCase() !== name.toLowerCase());
    
    await writeFile(dataSource, list.join('\n'));

}