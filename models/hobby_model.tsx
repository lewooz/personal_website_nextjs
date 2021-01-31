class HobbyModel {
    title: string
    subtitle: string
    text: string
    imagePath: string

    constructor(title: string, subtitle: string, text: string, imagePath: string) {
        this.title = title
        this.subtitle = subtitle
        this.text = text
        this.imagePath = imagePath
    }
}

export default HobbyModel