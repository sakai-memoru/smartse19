1907-how-to-use-jupyter-notebook-on-powershell-kernel

# 1907-how-to-use-jupyter-notebook-on-powershell-kernel

## overview
- Use powershell kernel on jupyter notebook.

## reference
- jupyter-powershell GitHub repository
    - https://github.com/vors/jupyter-powershell


## log

### installation

```
(base) PS G:\workspace> pip install powershell_kernel
Requirement already satisfied: powershell_kernel in c:\programdata\anaconda37\lib\site-packages (0.0.8)
(base) PS G:\workspace> python -m powershell_kernel.install
Using powershell_command='powershell'
Installing IPython kernel spec
C:\ProgramData\Anaconda37\lib\site-packages\powershell_kernel\install.py:54: DeprecationWarning: replace is ignored. Installing a kernelspec always replaces an existing installation
  KernelSpecManager().install_kernel_spec(td, 'powershell', user=user, replace=True, prefix=prefix)
```

### execution

```
(base) PS G:\workspace\powershells> jupyter notebook
[I 20:18:09.928 NotebookApp] JupyterLab extension loaded from C:\ProgramData\Anaconda37\lib\site-packages\jupyterlab
[I 20:18:09.928 NotebookApp] JupyterLab application directory is C:\ProgramData\Anaconda37\share\jupyter\lab
[I 20:18:09.933 NotebookApp] Serving notebooks from local directory: G:\workspace\powershells
[I 20:18:09.935 NotebookApp] The Jupyter Notebook is running at:
[I 20:18:09.935 NotebookApp] http://localhost:8888/?token=b13f3de9beeb528c7af4011a49c279bc121c6d43f3358aea
[I 20:18:09.936 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[C 20:18:10.298 NotebookApp]

    To access the notebook, open this file in a browser:
        file:///G:/Users/sakai/AppData/Roaming/jupyter/runtime/nbserver-13796-open.html
    Or copy and paste one of these URLs:
        http://localhost:8888/?token=b13f3de9beeb528c7af4011a49c279bc121c6d43f3358aea
[I 20:18:20.792 NotebookApp] Creating new notebook in
[I 20:18:24.441 NotebookApp] Kernel started: ad87c58e-25d1-4f0c-a34b-318fa629d7e6
[I 20:18:29.264 NotebookApp] Adapting to protocol v5.1 for kernel ad87c58e-25d1-4f0c-a34b-318fa629d7e6
```


[![Image from Gyazo](https://i.gyazo.com/13901575cbe6994630153e8eebbdf06f.png)](https://gyazo.com/13901575cbe6994630153e8eebbdf06f)