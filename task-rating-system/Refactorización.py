# Método para ingresar puntuación y comentario
def ingresar_puntuacion_comentario():
    while True:
        print('Por favor, introduzca una puntuación en una escala de 1 a 5')
        point = input()

        if point.isdecimal():
            point = int(point)
            if point <= 0 or point > 5: 
                print('Por favor, introduzca un valor entre 1 y 5')
            else:
                print('Por favor, introduzca un comentario')
                comment = input()
                post = f'punto: {point} comentario: {comment}'
                
               
                with open("data.txt", 'a') as file_pc:
                    file_pc.write(f'{ post } \n')
                break
        else:
            print('Por favor, introduzca la puntuación en números')

# Método para verificar resultados
def verificar_resultados():
    print('Resultados hasta la fecha:')
    try:
        with open("data.txt", "r") as read_file:
            print(read_file.read())
    except FileNotFoundError:
        print("No hay resultados disponibles.")

# Método para finalizar el proceso
def finalizar_proceso():
    print('Finalizando el proceso.')

# Método principal para manejar el ciclo del programa
def iniciar_programa():
    while True:
        print('Seleccione el proceso que desea aplicar')
        print('1: Ingresar puntuación y comentario')
        print('2: Comprueba los resultados obtenidos hasta ahora.')
        print('3: Finalizar')
        num = input()

        if num.isdecimal():
            num = int(num)
            if num == 1:
                ingresar_puntuacion_comentario()
            elif num == 2:
                verificar_resultados()
            elif num == 3:
                finalizar_proceso()
                break
            else:
                print('Por favor, introduzca un número del 1 al 3.')
        else:
            print('Por favor, introduzca un número del 1 al 3.')

iniciar_programa()
