import { View, Text, FlatList, StyleSheet } from 'react-native';


export default function CompromissosEquipe() {
  const equipe = [
    {hora:'09:30', desc:'Reunião "Daily"' },
    {hora:'14:00', desc:'Reunião com cliente Carros & Carros' },
    {hora:'16:30', desc:'Prazo final Projeto X' },
    {hora:'09:30', desc:'Reunião "Daily"' },
    {hora:'12:00', desc:'Almoço com a diretoria' },
    {hora:'15:00', desc:'Saída viagem' },
    {hora:'09:30', desc:'Reunião "Daily"' },
    {hora:'15:30', desc:'Visita técnica Uni-FACEF' },
    {hora:'16:30', desc:'Prazo final Projeto ' }
  ];

 return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Compromissos da equipes</Text>
      
      <Text style={styles.sub}>Pedro Henrique Bassi Borges</Text>
      <Text style={styles.item}>Sistemas de Informações</Text>

      <Text style={styles.titulo}>(Eu)</Text>

      <Text style={styles.item}>09:30: Reunião "Daily"</Text>
      <Text style={styles.item}>14:00: Reunião com cliente Carros & Carros</Text>
      <Text style={styles.item}>16:30: Prazo final Projeto X</Text>

      <Text style={styles.titulo}>Jurema (chefe)</Text>

      <Text style={styles.item}>09:30: Reunião "Daily"</Text>
      <Text style={styles.item}>12:00 Almoço com a diretoria</Text>
      <Text style={styles.item}>16:30: Saída viagemX</Text>

      <Text style={styles.titulo}>Aderbal</Text>

      <Text style={styles.item}>09:30: Reunião "Daily"</Text>
      <Text style={styles.item}>13:30: Visita técnica Uni-FACEF</Text>
      <Text style={styles.item}>16:30: Prazo final Projeto X</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  titulo:{ fontSize:22, marginBottom:20 },
  item:{ marginBottom:10 }
});
