import { View, Text, SectionList, StyleSheet } from 'react-native'
import compromissos from '../data/compSemana'

export default function CompSemana() {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center', width:'100%'}}>
        <Text style={styles.nome}>Pedro Henrique Bassi Borges</Text>
        <Text style={styles.turma}>Sistemas de informação</Text>
      </View>

      <SectionList
        sections={compromissos.map(s => ({ title: s.titulo, data: s.dados }))}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        style={{ marginTop:20 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  titulo:{ fontSize:22, marginBottom:10 },
  nome:{ fontSize:15 },
  turma:{ fontSize:13, marginBottom:10 },
  header:{ 
    fontSize:18, 
    marginTop:20, 
    fontWeight:'600',
    textAlign:'center' 
  },
  item:{ fontSize:15, marginBottom:10 }
})
