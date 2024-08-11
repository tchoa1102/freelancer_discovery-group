document.addEventListener('DOMContentLoaded', () => {
    // #region handle hover coreValueAndCommitmentHeadingItem
    const coreValueAndCommitmentHeadingItem = document.querySelectorAll('.core-value-and-commitment__body__content__list__item__heading')
    coreValueAndCommitmentHeadingItem.forEach(element => {
        const parent = element.parentElement.parentElement
        if (!parent) return
        const coreValueAndCommitmentRubyHover = parent.querySelector('.core-value-and-commitment__body__content__list__item .hover')
        const coreValueAndCommitmentRubyUnHover = parent.querySelector('.core-value-and-commitment__body__content__list__item .un-hover')
        handleEventHover(element, coreValueAndCommitmentRubyHover, coreValueAndCommitmentRubyUnHover)
    })

    function handleEventHover(target, hover, unHover) {
        target.addEventListener('mouseover', () => {
            hover.style.display = 'block'
            unHover.style.display = 'none'
        })
        target.addEventListener('mouseout', () => {
            hover.style.display = 'none'
            unHover.style.display = 'block'
        })
    }
    // #endregion handle hover coreValueAndCommitmentHeadingItem

    // const fieldActivityList = document.querySelector('.field-activity__list')

    // const rect = fieldActivityList.getBoundingClientRect()
    // const maxTD = fieldActivityList.scrollWidth - 1
    // let i = 0
    // let timeOut = 100
    // let flag = false
    // scrollSlide(fieldActivityList)
    // function scrollSlide(element) {
    //     setTimeout(() => {
    //         timeOut = 100
    //         if (flag) {
    //             i -= 1
    //             timeOut = 50
    //         } else {
    //             i += 0.5
    //         }
    //         element.scrollBy({
    //             behavior: 'smooth',
    //             left: i
    //         })
    //         if (fieldActivityList.scrollLeft + fieldActivityList.clientWidth >= maxTD) {
    //             flag = true
    //             // i = 0
    //         }
    //         console.log(flag, i)
    //         if (fieldActivityList.scrollLeft == 0) {
    //             flag = false
    //         }
    //         scrollSlide(element)
    //     }, timeOut)
    // }
})