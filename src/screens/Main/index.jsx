import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Vibration } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import * as Speech from 'expo-speech';

import {
    Container,
    ImageBackground,
    LogoImage,
    ItemContainer,
    ItemText,
    Text,
    Button,
    ButtonText
} from './styles';

import Background from '../../assets/background.jpg';
import Logo from '../../assets/logo.png';

export default function Main() {
    const ONE_SECOND_IN_MS = 1000;

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_800ExtraBold,
    });

    const [items, setItems] = useState([]);
    
    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        setItems(
            [...shuffle(["Álbum de fotos", "Chocalho", "Macacão", "Banheira", "Amamentar", "Camiseta", "Canção de Ninar", "Escova de cabelo", "Chupeta", "Cotonete", "Colher", "Mamadeira", "Leite", "Mochila", "Trocador", "Mordedor", "Copo", "Babador", "Travesseiro", "Brinquedos", "Tapete", "Carrinho", "Termômetro", "Canguru", "Cadeirinha para carro", "Fraldas", "Papinha", "Porta-Chupeta", "Pratinho", "Meias"]), "Bebê"]
        );
        setSelectedItem('');
    }, []);

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function handleSortear() {
        const lastItem = items.shift();
        setSelectedItem(lastItem);
        
        Vibration.vibrate(0.3 * ONE_SECOND_IN_MS);
        Speech.speak(lastItem, { language: 'pt-BR'});
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#13243E' }}>
                <Container>
                    <StatusBar style="light" background="#13243E" translucent />
                    <ImageBackground source={Background} resizeMode="cover" imageStyle={{ opacity: 0.3 }}>
                        <LogoImage source={Logo} />
                        
                        <View style={{ width: '100%'}}>
                            { selectedItem != '' ? (
                                <View style={{ width: '100%'}}>
                                    <ItemContainer>
                                        <ItemText>{selectedItem}</ItemText>
                                    </ItemContainer>
                                    <Text fontSize='18'>
                                        {`Número de palavras\n restantes: ${ items.length }`}
                                    </Text>
                                </View>
                            ) : (
                                <ItemContainer>
                                    <Text>Clique no Botão "Sortear" para iniciar!</Text>
                                </ItemContainer>
                            )}
                        </View>

                        <Button onPress={handleSortear} activeOpacity={0.8} disabled={items.length == 0}>
                            <ButtonText>Sortear</ButtonText>
                        </Button>
                    </ImageBackground>
                </Container>
            </SafeAreaView>
        );
    }
}
