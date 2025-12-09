import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}></Text>
    <Text style={styles.titulo}></Text>
    <Text style={styles.titulo}></Text>

      <View style={styles.box}>
        <Text style={styles.agenda}>Agenda</Text>
        <Text style={styles.nome}>Pedro Henrique Bassi Borges</Text>
        <Text style={styles.turma}>Sistemas de informação</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Compromissos do dia')}>
        <Text>COMPROMISSOS DO DIA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Compromissos da semana')}>
        <Text>COMPROMISSOS DA SEMANA</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', paddingTop:50 },
  titulo:{ fontSize:26, marginBottom:40 },
  box:{ alignItems:'center', marginBottom:40 },
  agenda:{ fontSize:22 },
  nome:{ fontSize:15, marginTop:4 },
  turma:{ fontSize:14, color:'#555' },
  btn:{ backgroundColor:'#ddd', padding:12, borderRadius:6, width:240, alignItems:'center', marginTop:15 }
})
