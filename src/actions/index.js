export const setUserScreen = value => {
    return {
        type: "USER_SCREEN",
        value
    }
}
export const setUserUserProperties = (userName, difficultyLevel) => {
    return {
        type: "USER_PROPERTIES",
        value: { userName, difficultyLevel }
    }
}