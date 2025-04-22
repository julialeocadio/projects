import java.awt.*;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import javax.swing.*;

public class myFrame extends JFrame{
    SimpleDateFormat timeFormat;
    JLabel timeLabel;
    String time;

    myFrame(){
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setTitle("time");
        this.setLayout(new FlowLayout());
        this.setSize(500,300);
        this.setResizable(false);
        this.getContentPane().setBackground(Color.black);

        timeFormat = new SimpleDateFormat("HH:mm:ss");
        timeLabel = new JLabel();
        timeLabel.setFont(new Font("Arial", Font.PLAIN, 75));
        timeLabel.setForeground(new Color(247,20,147));
        timeLabel.setBackground(Color.black);
        timeLabel.setOpaque(true);
        timeLabel.setHorizontalAlignment(SwingConstants.CENTER);
        timeLabel.setVerticalAlignment(SwingConstants.CENTER);

        
        this.setLayout(new BorderLayout());
        this.add(timeLabel, BorderLayout.CENTER);
        this.setVisible(true);

        setTime();
    }
    private void setTime(){
        while(true){
            time = timeFormat.format(Calendar.getInstance().getTime());
            timeLabel.setText(time);
        }
    }
}