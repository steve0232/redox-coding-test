const Text = props => {
  return (
    <div className='border-box'>
      {/* Could this also be pulled out into a separate component for reusability */}
        <div key={props.id}>
          <strong>{props.title}</strong>
          <p>{props.text1}</p>
          {/* Corrected spelling of paragraph (was paragrah - without a p) */}
          {props.text2 && <p>{props.text2}</p>}
        </div>
    </div>
  );
};

export default Text;
