$(function () {

    // NAV MENU SLIDE DOWN 

    $('.navButton').on('click', function () {
        $('.navContent').slideToggle('slow');
    })

    //  READ MORE FUNCTIONS

    $('.weeklyHighlightReadMe').on('click', function () {
        $('.extraWordsWeekly').slideToggle('slow');
    })

    $('.squareGalleryTopReadMe').on('click', function () {
        $('.extraWordsSquareGalleryTop').slideToggle('slow');
    })

    $('.squareGalleryBottomReadMe').on('click', function () {
        $('.extraWordsSquareGalleryBottom').slideToggle('slow');
    })


    //THANK YOU FOR SUBSCRIBING POPUP

    //USER ANSWER ARRAY
    const userResponse = []

    // DATA TO BE APPENDED UPON CLICK
    const appendData = (userId) => {
        $('.emailConfirmModal').append(
            `
            <h2>Thank you from <em>One</em> Magazine</h2>
            <p class='changeThis'>A confirmation e-mail will be sent to ${userResponse[0]} shortly.</p>`
        )
    }

    // IF INPUT IS BLANK AT TIME OF SUBMIT APPEND THIS DATA
    const needEmail = () => {
        $('.emailConfirmModal').append(
            `
            <h2>Thanks! for your interest in <em>One</em> Magazine</h2>
            <p>Please enter your e-mail address</p>`
        )
    }

    // ON FORM SUBMIT FUNCTION
    const formHandle = $('form').on('submit', function (e) {
        // PREVENT DEFAULT FORM ACTIONS - RELOAD
        e.preventDefault();

        //Save User Response in a variable
        const userId = $('#emailInput').val()

        //Create if statement; if userID isnt blank, run script and push out thank you note. if not, ask for email.
        if (userId !== '') {

            //Push it onto the userResponse array so that it is able to be used globally
            userResponse.push(userId)

            //Call function appendData() to put information onto modal
            appendData();

            //Get it to pop up with data
            const popupAction = $('.emailConfirmModal').removeClass('hideMe').fadeIn('slow');

        } else {

            //Get it to pop up with data
            const popupAction = $('.emailConfirmModal').removeClass('hideMe')

            needEmail();
        }
    });

    //MODAL CLOSE

    // REMOVE CURRENT DATA FROM ARRAY
    const removal = () => {
        userResponse.splice(0, 1);
    }

    // CLOSE POP UP BY ADDING CLASS WITH PROPERTY 'display:none'
    const popupClose = () => {
        $('.emailConfirmModal').addClass('hideMe');
    }

    // CHANGE INPUT VALUE TO A BLANK VALUE
    const resetInput = () => {
        $('#emailInput').val('')
    }

    //REMOVE PREVIOUS WORDS FROM THE MODAL IF USER SUBMITS AGAIN
    const wordsRemove = () => {
        $('.emailConfirmModal').empty();
    }

    // ACTUAL FUNCTION TO CLOSE AND RESET THE POPUP
    const formClose = $('.exitButton').on('click', function () {
        removal();
        resetInput();
        wordsRemove(this);
        popupClose();

    })
})