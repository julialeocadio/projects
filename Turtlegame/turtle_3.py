from turtle import *

speed(0)
move_distance = 20
bgcolor("#D7881F")
penup()
goto(100,400)
pendown()

color("#90D5FF")
begin_fill()
goto(500,400)
goto(500,-500)
goto(100,-500)
goto(100,400)
end_fill()

penup()
goto(-160,0)
shape("turtle")
color("green")


def move_up():
    setheading(90)
    forward(move_distance)
    check_goal()

def move_down():
    setheading(270)
    forward(move_distance)
    check_goal()

def move_left():
    setheading(180)
    forward(move_distance)
    check_goal()

def move_right():
    setheading(0)
    forward(move_distance)
    check_goal()

def check_goal():
    if xcor() > 100:
        hideturtle()
        color("white")
        write("YOU WIN!")
        Screen().onkey(None,"Up")
        Screen().onkey(None,"Down")
        Screen().onkey(None,"Left")
        Screen().onkey(None,"Right")

Screen().onkey(move_up,"Up")
Screen().onkey(move_down,"Down")
Screen().onkey(move_left,"Left")
Screen().onkey(move_right,"Right")

Screen().listen()
done()