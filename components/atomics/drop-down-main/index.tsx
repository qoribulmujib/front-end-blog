import _ from "lodash";
import ReactSelect, { components } from "react-select";
import CreatableSelect from "react-select/creatable";

type Props = {
    placeholder?: string;
    value?: any;
    options?: any;
    onChange?: Function | any;
    disabled?: boolean;
    height?: any;
    backgroundColor?: any;
    components?: any;
    styles?: any;
    label?: string;
    menuIsOpen?: any;
    isClearable?: boolean;
};

type MultiSelectType = {
    closeMenuOnSelect?: boolean;
    options?: any[];
    handleChange?: any;
};

const DropDownMain = ({
    placeholder,
    value = null,
    options = [],
    onChange,
    disabled = false,
    height = "",
    backgroundColor = "",
    components,
    styles,
    label,
    menuIsOpen,
    isClearable = false,
}: Props) => {
    return (
        <div className="relative w-full">
            {label && (
                <div className="flex items-center space-x-1 mb-1 w-full">
                    <label className="block text-gray-700 text-sm font-bold">
                        {label}
                    </label>
                </div>
            )}
            <ReactSelect
                components={components ?? { IndicatorSeparator: null }}
                placeholder={placeholder}
                isClearable={isClearable}
                value={value}
                options={options}
                onChange={onChange}
                isDisabled={disabled}
                menuIsOpen={menuIsOpen}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 8,
                })}
                styles={
                    styles ?? {
                        menu: (provided, state) => ({
                            ...provided,
                            zIndex: 2
                        }),
                        option: (styles: any, state: any) => ({
                            ...styles,
                            fontSize: 14,
                            color: "#444B55",
                            backgroundColor: state.isSelected ? "#F1F3F7" : "",
                        }),
                        menuList: (styles: any, state: any) => ({
                            ...styles,
                        }),
                        control: (styles: any, state: any) => ({
                            ...styles,
                            width: "100%",
                            fontSize: 14,
                            backgroundColor: state.isDisabled ? "#f2f2f2" : backgroundColor,
                            height: "100%",
                            borderRadius: 8,
                            border: "1px solid #DEE3ED",
                            color: "#444B55",
                        }),
                        container: (styles: any, state: any) => ({
                            ...styles,
                            height: "100%",
                        }),
                        singleValue: (styles: any, state: any) => ({
                            ...styles,
                        }),
                    }
                }
            />
        </div>
    );
};

const MultiSelect = ({
    closeMenuOnSelect = true,
    options = [],
    handleChange,
}: MultiSelectType) => {
    return (
        <CreatableSelect
            isMulti
            onChange={handleChange}
            closeMenuOnSelect={closeMenuOnSelect}
            options={options}
        />
    );
};

export { DropDownMain, MultiSelect };
