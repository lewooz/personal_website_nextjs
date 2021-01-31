class CourseModel {
    yearText: string
    titleText: string
    courseLink: string
    iconType: string

    constructor(yearText: string, titleText: string, courseLink: string, iconType: string) {
        this.yearText = yearText
        this.titleText = titleText
        this.courseLink = courseLink
        this.iconType = iconType
    }
}

export default CourseModel