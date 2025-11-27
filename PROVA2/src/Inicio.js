import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda do dia</Text>
      <Text style={styles.sub}>Pedro Henrique Bassi Borges</Text>
      <Text style={styles.nome}>Sistemas de Informações</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('MeusCompromissos')}>
        <Text style={styles.txt}>Meus compromissos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CompromissosEquipe')}>
        <Text style={styles.txt}>Compromissos da equipe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  titulo: { fontSize:28, marginBottom:20 },
  sub: { fontSize:20 },
  nome: { marginBottom:30 },
  botao: { backgroundColor:'#ddd', padding:12, borderRadius:6, width:220, alignItems:'center', marginTop:10 },
  txt: { fontSize:16 }
});
