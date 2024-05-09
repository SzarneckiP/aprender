export interface Course {
    id: string;
    name: string;
    video?: string | null;
}

interface Baner {
    url?: string | undefined,
}

export interface CourseListsProps {
    author: string;
    baner?: Baner;
    chapter: Course[];
    demoUrl?: string;
    description?: string;
    free: boolean;
    id: string;
    name?: string;
    sourceCode?: string | null;
    totalChapters?: number;
}