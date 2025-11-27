import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function MeusCompromissos() {
  const dados = [
    {hora:'09:30', desc:'Reunião "Daily"' },
    {hora:'14:00', desc:'Reunião com cliente Carros & Carros' },
    {hora:'16:30', desc:'Revisar Projeto X' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>(Eu)</Text>

      <Text style={styles.sub}>Pedro Henrique Bassi Borges</Text>
      <Text style={styles.nome}>Sistemas de Informações</Text>
      
      <Text style={styles.item}>09:30: Reunião "Daily"</Text>
      <Text style={styles.item}>14:00: Reunião com cliente Carros & Carros</Text>
      <Text style={styles.item}>16:30: Prazo final Projeto X</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  titulo:{ fontSize:22, marginBottom:5 },
  nome:{ marginBottom:20 },
  item:{ paddingVertical:8 }
});
