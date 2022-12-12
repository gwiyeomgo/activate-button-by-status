import React from "react";
import {fireEvent,screen, render} from '@testing-library/react';
import ActivateButton from "./activateButton";
import userEvent from '@testing-library/user-event';

describe('button click test',  () => {
    //it :  should do this thing
    //test:  if it does this thing
    test('if render button', () => {
         render(<ActivateButton
            title={'Click'}
            type={"status"}
            onClick={() => {}}
            currentStatus={"Registered"}
            activeStatus={["Registered"]}
        />);

        const button = screen.getByRole('button', {name: 'Click'});
        fireEvent.click(button)
        userEvent.click(button)
    });

});

