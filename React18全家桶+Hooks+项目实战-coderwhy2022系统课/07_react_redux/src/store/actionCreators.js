export const increaceAction = (count) => ({
    type: "increace",
    count,
})

export const decreaceAction = (count) => ({
    type: "decreace",
    count,
})

export const renewBannerAction = (bunnerList) => ({
    type: 'banners',
    bunnerList,
})

export const renewRecommendsAction = (recommendList) => ({
    type: 'recommends',
    recommendList,
})