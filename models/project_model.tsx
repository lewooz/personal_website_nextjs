class ProjectModel {
    imageLink : string
    titleText : string
    contentText : string
   

    constructor(imageLink: string, titleText : string, contentText : string) {
        this.imageLink = imageLink
        this.titleText = titleText
        this.contentText = contentText
      }
}

export default ProjectModel