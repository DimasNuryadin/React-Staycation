import React, { useRef, useState } from 'react'
import propTypes from 'prop-types';
import './index.scss';

InputFile.defaultProps = {
  placeholder: "Browse a file..."
}

InputFile.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.string, propTypes.number]),
  append: propTypes.oneOfType([propTypes.string, propTypes.number]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string
}

export default function InputFile(props) {
  const [fileName, setFileName] = useState("")
  const { value, name, prepend, append, placeholder, outerClassName, inputClassName, accept } = props;

  const refInputFile = useRef(null);

  const onChange = (event) => {
    setFileName(event.target.value)
    props.onChange({
      target: {
        name: event.target.name,
        value: event.target.files
      }
    })
  }

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">
              {prepend}
            </span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          type="file"
          name={name}
          className="d-none"
          value={fileName}
          onChange={onChange}
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={fileName}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">
              {append}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
