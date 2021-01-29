class CareerModel {
    yearText : string
    titleText : string
    locationText : string
    responsibilitiesList : Array<string>

    constructor(yearText: string, titleText : string, locationText : string, responsibilitiesList : Array<string>
        ) {
        this.yearText = yearText
        this.titleText = titleText
        this.locationText = locationText
        this.responsibilitiesList = responsibilitiesList
      }
}

export default CareerModel