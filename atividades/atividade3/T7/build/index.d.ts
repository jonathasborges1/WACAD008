declare enum Turno {
    MANHA = "manh\u00E3",
    TARDE = "tarde",
    NOITE = "noite"
}
declare enum Area {
    HUMANAS = "humanas",
    BIOLOGICA = "biol\u00F3gicas",
    EXATAS = "exatas"
}
interface Curso {
    desc: string;
    area: Area;
}
declare function validarTamanhoMinimo(tamanhoMinimo: any): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare class Turma {
    private static nextId;
    readonly id: number;
    private _descricao;
    private _turno;
    private _curso;
    constructor(descricao: string, turno: Turno, curso: Curso);
    get descricao(): string;
    set descricao(value: string);
    get turno(): Turno;
    set turno(value: Turno);
    get curso(): Curso;
    set curso(value: Curso);
}
declare class GerenciadorTurmas {
    private turmas;
    adicionarTurma(turma: Turma): void;
    excluirTurma(_id: number): void;
    alterarTurma(id: number, novaDescricao: string): void;
    buscarTurma(id: number): Turma | undefined;
    imprimirTurmas(): void;
}
declare const gerenciador: GerenciadorTurmas;
declare const turma1: Turma;
declare const turma2: Turma;
