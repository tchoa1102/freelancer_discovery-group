document.addEventListener('DOMContentLoaded', () => {
    // #region handle hover coreValueAndCommitmentHeadingItem
    const coreValueAndCommitmentHeadingItems = document.querySelectorAll('.core-value-and-commitment__body__content__list__item__heading')
    coreValueAndCommitmentHeadingItems.forEach(element => {
        const parent = element.parentElement.parentElement
        if (!parent) return
        const coreValueAndCommitmentRubyHover = parent.querySelector('.core-value-and-commitment__body__content__list__item .hover')
        const coreValueAndCommitmentRubyUnHover = parent.querySelector('.core-value-and-commitment__body__content__list__item .un-hover')
        handleEventHoverCommitmentHeadingItem(element, coreValueAndCommitmentRubyHover, coreValueAndCommitmentRubyUnHover)
    })

    function handleEventHoverCommitmentHeadingItem(target, hover, unHover) {
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

    // #region handle hover field activity item
    const fieldActivityItems = document.querySelectorAll('.field-activity__body__list__item')
    fieldActivityItems.forEach(fieldActivityItem => {
        const substractBg = fieldActivityItem.querySelector('.substract-bg')
        const over = fieldActivityItem.querySelector('.over')
        const sub = over.querySelector('.substract-bg')
        if (!substractBg) return
        const bgShow = substractBg.dataset.img
        const coverColor = substractBg.dataset.cover

        // fieldActivityItem.style.background = `url('${bgShow}') center/cover, #383838`
        // console.log(bgShow)
        sub.style.backgroundImage = `url('${bgShow}')`
        fieldActivityItem.addEventListener('mouseover', () => {
            over.style.display = 'block'
            // over.style.backgroundImage = bgShow
            // console.log(over.style.backgroundImage)
        })
        fieldActivityItem.addEventListener('mouseout', () => {
            over.style.display = 'none'
        })
    })
    // #endregion handle hover field activity item

    // modal
    const navMobileModal = document.querySelector('.nav-mobile-modal')
    const btnShowNavModel = document.querySelector('.nav-mobile__show-nav__btn')
    const btnCloseNavModal = document.querySelector('.nav-mobile-modal__close-btn')
    btnShowNavModel.addEventListener('click', (e) => {
        e.preventDefault()
        navMobileModal.style.display = 'block'
    })
    btnCloseNavModal.addEventListener('click', (e) => {
        e.preventDefault()
        navMobileModal.style.display = 'none'
    })
})