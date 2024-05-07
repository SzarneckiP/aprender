'use client'
import { useEffect } from "react"
import { getAllCourseList } from "@/app/_utils/GlobalApi"

const CourseList = () => {

    useEffect(() => {
        getAllCourses()
    }, [])

    const getAllCourses = () => {

        getAllCourseList().then(
            res => {
                console.log(res)
            }
        )

    }
    return (
        <div>CourseList</div>
    )

}

export default CourseList