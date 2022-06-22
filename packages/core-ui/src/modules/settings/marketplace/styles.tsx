import styled from 'styled-components';
import styledTS from 'styled-components-ts';
import { colors, dimensions, typography } from '@erxes/ui/src/styles';
import { rgba } from '@erxes/ui/src/styles/ecolor';

// Main page

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${dimensions.coreSpacing}px;
  height: 250px;
  background-color: ${colors.colorPrimary};
  border-radius: 8px;
  position: relative;
  color: ${colors.colorWhite};
  font-weight: 700;
  font-size: 20px;
  background-image: url('/images/stars.png');

  img {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

// Leftbar

const MainContainer = styledTS<{ active?: boolean }>(styled.section)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styledTS<{ active?: boolean }>(styled.div)`
  position: relative;
  transition: .3s all;
  margin-bottom: ${dimensions.coreSpacing}px;
`;

const Search = styled.div`
  border: 1px solid ${colors.borderPrimary};
  border-radius: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 6px;

  input {
    background: 0 0;
    border: none;
    flex: 1;
    outline: 0;
  }
`;

const FilterContainer = styledTS<{ active?: boolean }>(styled.div)`
  transition: .s all;
  flex: 1;
`;

const Filter = styled.div`
  border-radius: 8px;
  height: 100%;
  border: 1px solid ${colors.borderPrimary};
`;

const FilterHeader = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 9px;
  align-items: center;
`;

const Box = styled.div`
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${colors.borderPrimary};
`;

const PaddingLeft = styled.div`
  padding-left: ${dimensions.unitSpacing}px;
  font-weight: 700;
`;

const PaddingBottom = styled.div`
  padding-bottom: 5px;
`;

// Plugin Preview

const ListContainer = styled.div`
  padding-bottom: ${dimensions.coreSpacing}px;
  border-bottom: 1px solid ${colors.borderPrimary};
`;

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${dimensions.coreSpacing}px 0px;
`;

const ListTitle = styled.b`
  height: ${typography.lineHeightHeading5};
`;

const ColorText = styled.b`
  color: ${colors.colorPrimary};
`;

const PluginContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin-right: ${dimensions.coreSpacing}px;
  margin-bottom: ${dimensions.coreSpacing}px;
  width: 250px;
  border: 1px solid ${colors.borderPrimary};
  border-radius: 8px;
  padding: ${dimensions.unitSpacing}px;

  button {
    float: left;
    margin-right: 5px;
    background: rgb(103, 63, 189);
    border-radius: 5px;
    color: rgb(255, 255, 255);
    border: none;
    font-weight: 500;
    outline: 0px;
    padding: 5px 15px;
    cursor: pointer;
  }

  .uninstall {
    background: #eb5a5a;
  }

  .install {
    background: #13ce66;
  }
`;

const PluginPic = styled.img`
  width: 60px;
  height: 60px;
`;

const PluginInformation = styled.div`
  margin: ${dimensions.unitSpacing}px 0 ${dimensions.unitSpacing}px 0;

  b {
    text-transform: capitalize;
  }
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden !important;
`;

//************** */

const inputPadding = '0px';
const inputHeight = '15px';
const inputScale = '12px';
const inputBorderWidth = '2px';

const WidgetApperance = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100%;
`;

const FormLabel = styled.label`
  position: relative;
  display: inline-block;
  font-weight: normal;

  span {
    cursor: pointer;
    display: inline-block;
  }

  &:hover {
    color: ${colors.colorPrimary};
  }
`;

const inputStyle = styledTS<{ disabled?: boolean; color?: string }>(
  styled.input
)`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
  cursor: ${props => props.disabled && 'not-allowed'}

  &:focus {
    + span {
      &::before {
        box-shadow: 0 0 0 2px rgba(#333, 0.4) !important;
      }
    }
  }

  &:hover {
    + span {
      &::before {
        border-color: ${props =>
          props.color ? props.color : colors.colorLightGray};
      }
    }
  }

  &:active {
    + span {
      &::before {
        transition-duration: 0;
      }
    }
  }

  + span {
    position: relative;
    padding: ${inputPadding};
    user-select: none;

    &:before {
      background-color: ${colors.colorWhite};
      border: ${inputBorderWidth} solid ${props =>
  props.color ? rgba(props.color, 0.7) : colors.colorShadowGray};
      box-sizing: content-box;
      content: '';
      color: ${colors.colorWhite};
      margin-right: calc(${inputHeight} * 0.25);
      top: 53%;
      left: 0;
      width: ${inputHeight};
      height: ${inputHeight};
      display: inline-block;
      vertical-align: text-top;
      border-radius: 50%;
      cursor: ${props => props.disabled && 'not-allowed'}
    }

    &:after {
      box-sizing: content-box;
      content: '';
      background-color: ${colors.colorWhite};
      position: absolute;
      top: 56%;
      left: calc(${inputPadding} + ${inputBorderWidth} + ${inputScale} / 2);
      width: calc(${inputHeight} - ${inputScale});
      height: calc(${inputHeight} - ${inputScale});
      margin-top: calc((${inputHeight} - ${inputScale}) / -2);
      transform: scale(0);
      transform-origin: 51%;
      transition: transform 200ms ease-out;
    }
  }

  + span:last-child:before {
    margin-right: 0px;
  }
`;

const Checkbox = styledTS<{ color?: string }>(styled(inputStyle))`
  + span {
    &:after {
      background-color: transparent;
      top: 53%;
      left: calc(1px + ${inputHeight} / 5);
      width: calc(${inputHeight} / 2);
      height: calc(${inputHeight} / 5);
      margin-top: calc(${inputHeight} / -2 / 2 * 0.8);
      border-style: solid;
      border-color: ${colors.colorWhite};
      border-width: 0 0 2px 2px;
      border-radius: 0;
      border-image: none;
      transform: rotate(-45deg) scale(0);
      transition: none;
    }
  }

  &:checked + span {
    &:before {
      animation: none;
      background-color: ${props =>
        props.color ? props.color : colors.colorSecondary};
      border-color: transparent;
    }

    &:after {
      content: '';
      transform: rotate(-45deg) scale(1);
      transition: transform 200ms ease-out;
    }
  }
`;

export {
  ImageWrapper,
  MainContainer,
  SearchContainer,
  Search,
  FilterContainer,
  Filter,
  FilterHeader,
  Box,
  PaddingLeft,
  PaddingBottom,
  ListContainer,
  ListHeader,
  ListTitle,
  ColorText,
  PluginContainer,
  Card,
  PluginPic,
  PluginInformation,
  Description,
  WidgetApperance,
  FormLabel,
  Checkbox
};