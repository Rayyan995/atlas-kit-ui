import React from 'react';
import styled from 'styled-components';
import Select from '@atlaskit/select';
import Group from '@atlaskit/tag-group';
import Tag from '@atlaskit/tag';
import { gridSize, fontSize } from '@atlaskit/theme';
import InlineEdit from '@atlaskit/inline-edit';

import Screen from '../UI/Screen/Screen'

const ReadViewContainer = styled.div`
  display: flex;
  font-size: ${fontSize()}px;
  height: ${(gridSize() * 2.5) / fontSize()}em;
  line-height: ${(gridSize() * 2.5) / fontSize()};
  max-width: 100%;
  padding: ${gridSize()}px ${gridSize() - 2}px;
`;

const EditViewContainer = styled.div`
  z-index: 300;
  position: relative;
`;

interface Option {
    label: string;
    value: string;
}

const selectOptions: Option[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Banana', value: 'Banana' },
    { label: 'Cherry', value: 'Cherry' },
    { label: 'Mango', value: 'Mango' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Strawberry', value: 'Strawberry' },
    { label: 'Watermelon', value: 'Watermelon' },
];

interface State {
    editValue: Option[];
}

export default class InlineEditExample extends React.Component<any, State> {
    state = {
        editValue: [],
    };

    onConfirmHandler = (value: Option[]) => {
        this.setState({
            editValue: value,
        });
    };

    render() {
        const selectedItems:string[] = []
        for (const item of this.state.editValue) {
            selectedItems.push(item["label"])
        }

        return (
            <div
                style={{
                    padding: `${gridSize()}px ${gridSize()}px ${gridSize() * 6}px`,
                }}
            >
                <Screen text={"You selected: " + selectedItems.toString()} />
                <InlineEdit
                    defaultValue={this.state.editValue}
                    label="Inline edit select"
                    editView={fieldProps => (
                        <EditViewContainer>
                            <Select
                                {...fieldProps}
                                options={selectOptions}
                                isMulti
                                autoFocus
                                openMenuOnFocus
                            />
                        </EditViewContainer>
                    )}

                    readView={() =>
                        this.state.editValue.length === 0 ? (
                            <ReadViewContainer>Click to choose options</ReadViewContainer>
                        ) : (
                                <div style={{ padding: `${gridSize() / 2}px` }}>
                                    <Group>
                                        {this.state.editValue.map((option: Option) => (
                                            <Tag text={option.label} key={option.label} />
                                        ))}
                                    </Group>
                                </div>
                            )
                    }
                    onConfirm={this.onConfirmHandler}
                />
            </div>
        );
    }
}