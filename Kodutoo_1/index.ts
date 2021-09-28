import express, { Request, Response, Application} from 'express';
const app: Application = express();
app.use(express.json());

const port: number = 3000;
const ok: number = 200;
const created: number = 202;

const db = {
    courses: [
        course_id,
        course_name,
    ],

    subjects: [
        subject_id,
        subject_name,
        lecturer_id,
        course_id,
        classroom_id,
    ],

    classrooms: [
        classroom_id,
        classroom_nr,
    ],

    lecturers: [
        lecturer_id,
        lecturer_name
    ],
}

app.get('/subject', (req: Request, res: Response) => {
    res.status(ok).json({
        subjects: db.subjects,
    });
});

app.post('/subject', (req: Request, res: Response) => {
    const { subject_id, subject_name, lecturer_id, course_id, classroom_nr } = req.body;
    db.subjects.push({
        subject_id,
        subject_name,
        lecturer_id,
        course_id,
        classroom_nr,
    });
    res.status(created).json({
        message: "Subject added",
    });
});

app.get('/subject/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const subject = db.subjects.find((element) => element.id === id);
    res.status(ok).json({
        subject
    });
});

app.delete('/subject/:id',  (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const subject = db.subjects.find((element) => element.id === id);
    res.status(ok).json({
        message: "Deleted!",
    });
});

app.get('/course', (req: Request, res: Response) => {
    res.status(ok).json({
        courses: db.courses,
    });
});

app.post('/course', (req: Request, res: Response) => {
    const { course_id, course_name } = req.body;
    db.courses.push({
        course_id,
        course_name,
    });
    res.status(created).json({
        message: "Course added",
    });
});

app.get('/course/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const course = db.courses.find((element) => element.id === id);
    res.status(ok).json({
        course
    });
});

app.delete('/course/:id',  (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const course = db.courses.find((element) => element.id === id);
    res.status(ok).json({
        message: "Deleted!",
    });
});

app.get('/lecturer', (req: Request, res: Response) => {
    res.status(ok).json({
        lecturers: db.lecturer,
    });
});

app.post('/lecturer', (req: Request, res: Response) => {
    const { lecturer_id, lecturer_name } = req.body;
    db.lecturers.push({
        lecturer_id,
        lecturer_name,
    });
    res.status(created).json({
        message: "New lecturer added",
    });
});

app.delete('/lecturer/:id',  (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const lecturer = db.lecturers.find((element) => element.id === id);
    res.status(ok).json({
        message: "Deleted!",
    });
});

app.get('/lecturer/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const lecturer = db.lecturers.find((element) => element.id === id);
    res.status(ok).json({
        lecturer
    });
});

app.get('/classroom', (req: Request, res: Response) => {
    res.status(ok).json({
        classrooms: db.classrooms,
    });
});

app.post('/classroom', (req: Request, res: Response) => {
    const { classroom_id, classroom_nr } = req.body;
    db.classrooms.push({
        classroom_id,
        classroom_nr,
    });
    res.status(created).json({
        message: "Classroom added",
    });
});

app.get('/classroom/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const classroom = db.classrooms.find((element) => element.id === id);
    res.status(ok).json({
        classroom
    });
});

app.delete('/classroom/:id',  (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const classroom = db.classrooms.find((element) => element.id === id);
    res.status(ok).json({
        message: "Deleted!",
    });
});