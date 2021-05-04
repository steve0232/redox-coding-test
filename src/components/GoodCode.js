import FormField from './FormField';
import Text from './Text';

const GoodCode = props => {
  const state = {
    pageTitle: 'Good Code',
    firstNameLabel: 'First Name:',
    lastNameLabel: 'Last Name:',
    companyNameLabel: 'Company Name:',
    text: [
      { id: 1, title: 'Title', text1: 'Some content being displayed' },
      {
        id: 2,
        title: 'Title 2',
        text1: 'Some content in paragraph',
        text2: 'More content!',
      },
    ],
  };

  //   Changed props names to firstName, lastName and companyName
  const { firstName, lastName, companyName } = props;
  // Pull out inline CSS into separate file(s) throughout. There's a mixture of inline and external CSS in the same file. This would lead to confusion in future.

  const goToUrl = url => {
    alert(`Redirecting to ${url}`);
  };

  return (
    <div className='boxSizing'>
      {/* No state is declared and so pageTitle doesn't exist*/}
      <h2>{state.pageTitle}</h2>
      {/* Changed div to form element and styled that in external css*/}
      <form>
        {/* Form fields could be put into a separate component and then data iterated over using map */}
        {/* Hard coded label names */}
        <FormField label={state.firstNameLabel} value={firstName} />
        <FormField label={state.lastNameLabel} value={lastName} />
        <FormField label={state.companyNameLabel} value={companyName} />
      </form>
      {/* HTML was being passed to the element when JSX should be used. Change to JSX */}
      <Text text={state.text} />
      {/* boxSizing has been declared in the inline style as 'content-box' and is linked to an external className as 'border-box'. The 'content-box' will take priority and causes confusion when reading the code and will possibly break the layout when it does something you're not expecting. */}
      {state.text.map(item => (
        <Text title={item.title} text1={item.text1} text2={item.text2} />
      ))}
      {/* Multiple buttons could again be one component and pass props to it depending on what you want the button to do/say */}
      <button
        type='button'
        onClick={e => {
          //   Should this be a dynamic link rather than hard coded?
          goToUrl('http://www.google.com');
        }}
      >
        Go There
      </button>
      <button
        type='button'
        onClick={e => {
          // props does not exist on Class1
          //   data isn't declared anywhere so this throws an error
          alert('this.props.onSave("data")');
        }}
      >
        Save
      </button>
      {/* This button doesn't do anything but maybe out of scope for this test. We'd probably want a function invoked onClick to clear all the form fields */}
      <button type='button'>Cancel</button>
    </div>
  );
};

export default GoodCode;

//   The refreshView function would cause an infinite loop of timers which would refresh the view every second - this would break the form as you wouldn't have chance to fill the form in before the page refreshes. Based on the rest of the code, I'm not sure why you'd want this to refresh every second as React will re-render the view if necessary if any state has changed.
// the refreshView function isn't declared anywhere so this throws an error
// I have removed componentDidMount and the function completely
