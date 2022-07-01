import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { debounce } from 'utils/debounce';
import { Container, ControlButton, Input } from './QuantityInput.styled';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

const QuantityInput = (props) => {
  const { initialValue, max, min, onChangeQuantity, ...rest } = props;
  const debounceUpdateQuantity = useRef(
    debounce(onChangeQuantity, 500)
  ).current;
  const [value, setValue] = useState(initialValue ?? 0);

  const handleClickButton = (action) => () => {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) {
      setValue(1);
      debounceUpdateQuantity(1);
      return;
    }

    if (action === ACTIONS.DECREMENT) {
      setValue((prev) => {
        debounceUpdateQuantity(prev - 1);
        return prev - 1;
      });
      return;
    }

    if (action === ACTIONS.INCREMENT) {
      setValue((prev) => {
        debounceUpdateQuantity(prev + 1);
        return prev + 1;
      });
      return;
    }
  };

  const handleChangeQuantity = ({ target: { value } }) => {
    const parsedValue = parseInt(value, 10);

    if ('max' in props && parsedValue > max) {
      setValue(max);
      debounceUpdateQuantity(max);
      return;
    }

    setValue(parsedValue);

    if (!isNaN(parsedValue)) {
      debounceUpdateQuantity(parsedValue);
    }
  };

  return (
    <Container>
      <ControlButton
        disabled={value === min || isNaN(parseInt(value, 10))}
        onClick={handleClickButton(ACTIONS.DECREMENT)}
      >
        -
      </ControlButton>
      <Input
        {...rest}
        max={max}
        min={min}
        type='number'
        value={value}
        onChange={handleChangeQuantity}
      />
      <ControlButton
        disabled={value === max || isNaN(parseInt(value, 10))}
        onClick={handleClickButton(ACTIONS.INCREMENT)}
      >
        +
      </ControlButton>
    </Container>
  );
};

QuantityInput.propTypes = {
  initialValue: PropTypes.number.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  onChangeQuantity: PropTypes.func.isRequired,
};

export default QuantityInput;
