export interface Option {
    title: string;
    isCorrectAns: boolean;
    id: number;
}

export interface Questions1 {
    qNo: number;
    questions: string;
    options: Option[];
    id: number;
}

export interface QuestionBank {
    qNum: number;
    qTitle: string;
    totalQuestions: number;
    questions1: Questions1[];
    id: number;
}
