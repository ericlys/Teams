import { useState } from "react";
import { Alert } from "react-native";
import { Container, Content, Icon } from "./styles";

import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

import { Header } from "@components/Headers";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation();

  async function handleNew() {
    if(group.trim().length === 0) {
      return Alert.alert('Novo Grupo', 'informe o nome da turma.');
    }

    try {
      await groupCreate(group);
      navigation.navigate('players', { group });

    }catch (error) {
      if(error instanceof AppError){
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo','Não foi possível criar um novo grupo.');
        console.log(error);
      }  
    }
  }

  return(
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon />
        <Highlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />
        <Button 
          title="criar"
          style={{marginTop: 20}}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}