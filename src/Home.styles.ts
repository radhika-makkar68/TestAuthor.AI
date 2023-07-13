import { Button, OutlineButton, SecondaryButton } from '@chegg-ui/button';
import { Dropdown } from '@chegg-ui/dropdown';
import { Input } from '@chegg-ui/input';
import { Link } from '@chegg-ui/link';
import { SelectionMenu } from '@chegg-ui/selectionmenu';
import { colors, font } from '@chegg-ui/theme';
import { Typography } from '@chegg-ui/typography';
import styled from 'styled-components';

export const MainContent = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  height:80vh;
`;


export const ContentDiv=styled.div`
background-color:#EFEFEF;
display:flex;
flex-direction:column;
padding:20px;
border-radius:10px;

> * {
  margin: 10px 0px; /* Add margin between all child elements */
}
`

export const UploadDiv=styled.div`
height:100px;
display:flex;
justify-content:center;
border:1px solid black;
align-items:center;
cursor:pointer;
  `

  export const UploadLink=styled(Link)`
  &:hover{
  text-decoration:none;
  }`

  export const SecondaryDiv=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  `

  export const OptionDiv=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  `

  export const OptionDropdown=styled(Dropdown)`
  margin-right:20px;
  flex:5;`

  export const NumberInput=styled(Input)`
  flex:3;`

  export const Menu=styled(SelectionMenu)`
  >div[aria-checked="true"]:after{
    background:${colors.orange800}!important
  }`