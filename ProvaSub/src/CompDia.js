import { View, Text, FlatList, StyleSheet } from 'react-native'
import compromissos from '../data/compDia'

export default function CompDia() {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center', width:'100%'}}>
        <Text style={styles.data}>11/11 (ter)</Text>
        <Text style={styles.nome}>Pedro Henrique Bassi Borges</Text>
        <Text style={styles.turma}>Sistemas de informação</Text>
      </View>

      <FlatList
        data={compromissos}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.descr}</Text>
        )}
        style={{ marginTop:20 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  titulo:{ fontSize:22, marginBottom:5 },
  data:{ fontSize:18, marginBottom:5, fontWeight:'bold' },
  nome:{ fontSize:15 },
  turma:{ fontSize:13, marginBottom:10 },
  item:{ fontSize:16, marginBottom:12 }
})
