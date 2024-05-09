'use client'
import { useEffect, useState } from "react"
import { getAllCourseList } from "@/app/_utils/GlobalApi"
import Filters from "./filters"
import CourseCard from "./course-card"


const CourseList = () => {

    const [courseLists, setCourseLists] = useState([])


    useEffect(() => {
        getAllCourseList()
            .then(
                (data: unknown) => {
                    setCourseLists(data.courseLists)
                })
            .catch((error) => {
                console.log(error)
            })
    }, [])




    return (
        <div className="p-5 bg-white rounded-lg mt-5 shadow">
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-primary">All Courses</p>
                <Filters />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {courseLists.map((item, idx) => (
                    <div key={idx}>
                        <CourseCard data={item} />
                    </div>
                ))}
            </div>
        </div >
    )

}

export default CourseList