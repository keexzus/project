

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e);
        //e.target - element
        console.log(`Input Namne : $(e.target.name)`);
        console.log(`Input Value : $(e.target.value)`;)
        //console.log('handle form input')
    };
    const handleButtonClick = () => {
        alert('Thanks for clicking!');
    };
    const handleFormSubmission = (e) => (
        e.preventDefault();
        console.log('form submitted');
    );
    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Typical Form</h2>
                <input
                type='text'
                name='example'
                onChange={handleFormInput}
                style={{ margin: '1rem 0 '}}
                />
            </form>
            <button onClick={handleButtonClick}>Click Me</button>
        </section>
    )
}

export default EventExamples;