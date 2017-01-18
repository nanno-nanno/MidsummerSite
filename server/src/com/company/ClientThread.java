package com.company;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;

public class ClientThread extends Thread {

    protected Socket socket;

    public ClientThread(final Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        InputStream inputStream = null;
        BufferedReader bufferedReader = null;
        DataOutputStream dataOutputStream = null;

        try {
            inputStream = socket.getInputStream();
            bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            dataOutputStream = new DataOutputStream(socket.getOutputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }

        String line;
        while (true) {
            try {
                line = bufferedReader.readLine();
                if ((line == null) || line.equalsIgnoreCase("QUIT")) {
                    socket.close();
                    return;
                } else {
                    dataOutputStream.writeBytes(line + "\n\r");
                    dataOutputStream.flush();
                }
            } catch (IOException e) {
                e.printStackTrace();
                return;
            }
        }
    }
}
