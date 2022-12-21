import React from "react";
import {fireEvent,screen, render} from '@testing-library/react';
import ActivateButton from "./activateButton";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

// describe : test 그룹화
describe('button click test',  () => {
    //it :  should do this thing
    //test:  if it does this thing
    it('if render button', () => {
         render(<ActivateButton
            title={'Click'}
            type={"status"}
            onClick={() => {}}
            currentStatus={"Registered"}
            activeStatus={["Registered"]}
        />);

        const button = screen.getByRole('button', {name: 'Click'});
        expect(button).toBeInTheDocument();
    });
    test('button click', () => {
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

        expect(button).toHaveProperty('disabled',false)
    });

    test('button disabled', () => {
        render(<ActivateButton
            title={'Click'}
            type={"status"}
            onClick={() => {}}
            disabled={true}
            currentStatus={"Registered"}
            activeStatus={["Registered"]}
        />);

        const button = screen.getByRole('button', {name: 'Click'});

        expect(button).toHaveProperty('disabled',false)
    });

});

