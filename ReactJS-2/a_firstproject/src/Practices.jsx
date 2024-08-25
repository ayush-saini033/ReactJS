export const Practices = () => {
    const students = [];

    return (
        <>
            {/* <p>{students.length && "No Students found"}</p> */}
            {/* 1st method */}
            <p>{students.length === 0 && "No Students Found"}</p>
            {/* 2nd method */}
            <p>{!students.length && "No Students Found"}</p>
            {/* 3rd method */}
            <p>{!Boolean(students.length) && "No Students Found"}</p>
            <p>Number of students: {students.length}</p>
        </>
    )
};