import { useNavigate } from "react-router-dom";
import { Header } from '../../components/Header';
import { useForm } from "react-hook-form";
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { Container, Title, Column, TitleCadastro, SubtitleCadastro, InfoCadastrarContaText, JaTenhoContaText, Row, Wrapper, IconPerson, IconEmail, IconLock, ButtonContainer  } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            if (data.length && data[0].id) {
                navigate('/feed')
                return
            }

            alert('Usuário ou senha inválido')
        } catch (e) {
            //TODO: HOUVE UM ERRO
        }
    };

    const Button = ({title,variant = "primary", onClick}) => {
      return (
        <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
      )
    }


    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome completo" leftIcon={<IconPerson />} name="nomeCompleto" control={control} />
                            {errors.nome && <span>Nome é obrigatório</span>}
                            <Input placeholder="E-mail" leftIcon={<IconEmail />} name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <Input type="password" placeholder="Password" leftIcon={<IconLock />} name="senha" control={control} />
                            {errors.senha && <span>Senha é obrigatório</span>}
                            <Button  
                            title="Criar minha conta" 
                            variant="secondary" 
                            type="submit" 
                            style={{ width: '280px' }}
                            />
                        </form>
                        <Row>
                            <div>
                                <InfoCadastrarContaText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</InfoCadastrarContaText>
                           
                                <JaTenhoContaText>Já tenho conta. <a href="/login">Fazer login</a></JaTenhoContaText>
                            </div>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>

    );




}

export { Cadastro }