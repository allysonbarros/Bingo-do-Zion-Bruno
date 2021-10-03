import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #13243E;
`;

export const LogoImage = styled.Image`
    width: 345px;
    height: 105px;
`;


export const ImageBackground = styled.ImageBackground`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 40px;
`;

export const ItemContainer = styled.View`
    width: 100%;
    height: 150px;
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid #053A99;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-bottom: 20px;
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 24px;
    font-family: 'Poppins_600SemiBold';
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '22px' };
    text-align: center;
`;

export const ItemText = styled.Text`
    color: #fff;
    font-size: 24px;
    font-family: 'Poppins_600SemiBold';
    font-size: 32px;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    background-color: #DB352D;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.disabled ? 0.5 : 1 };
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 24px;
    font-family: 'Poppins_800ExtraBold';
    font-size: 22px;
`;