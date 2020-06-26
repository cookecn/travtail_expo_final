import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';


class HeroComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../img/work.jpg')} style={styles.heroHeaderStyle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroHeaderStyle: {
        height: 200,
        width: '100%'
    },
});

export default HeroComponent;