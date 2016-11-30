# Path to your oh-my-zsh installation.
export ZSH=/Users/huangcheng/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
ZSH_THEME="half-life"


# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.

plugins=(osx autojump colorize command-not-found copydir copyfile cp n history github brew git-extras git-flow brew node npm sublime svn zsh-syntax-highlighting zsh-autosuggestions)


# User configuration

export PATH="/usr/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
# export MANPATH="/usr/local/man:$MANPATH"

source $ZSH/oh-my-zsh.sh

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/dsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"






CASE_SENSITIVE="fals"
ENABLE_CORRECTION="true"
DISABLE_UNTRACKED_FILES_DIRTY="true"

# Example aliases
alias zshconfig="subl ~/.zshrc"
alias ohmyzsh="subl ~/.oh-my-zsh"

# common
alias -g 'ls'='ls -vh'
alias sl=ls
alias -g '...'='../..'
alias -g '....'='../../..'
alias -- -='cd -'
alias -g '_'='sudo'
alias please='sudo'
alias -g BG='& exit'
alias -g C='|wc -l'
alias -g G='|grep'
alias -g H='|head'
alias -g V=' --verbose'
alias 菜单='cd'

alias geticon='~/Documents/shell/geticon.sh'

alias pu='pushd'
alias po='popd'

## get top 10 shell commands:
alias top10='print -l ${(o)history%% *} | uniq -c | sort -nr | head -n 10'

## Execute \kbd{./configure}
alias CO="./configure"

# 自动解压对应类型的文件
alias -s gz='tar -xzvf'
alias -s tgz='tar -xzvf'
alias -s zip='unzip'
alias -s bz2='tar -xjvf'

# svn
alias sst="svn status"
alias sup="svn update"
alias smt="svn commit -m"

# git
alias gad="git add"
alias gdf="git diff "
alias gst="git status"
alias gpl="git pull"
alias gph="git push"
alias glg="git log --graph --decorate --pretty=oneline --abbrev-commit"
alias gci='git ci -m'

alias podd="pod update --no-repo-update"


alias zb="cat /dev/urandom | hexdump -C | grep --color=auto \"ca fe\""
alias showip='ifconfig | grep "inet "'
alias cleanDNS='sudo launchctl kickstart -k system/com.apple.networking.discoveryd'

alias chrome='open -a Google\ Chrome --args --disable-web-security'

# alias node='node --harmony'
# alias sudonode='sudo node --harmony'
alias mnpm='cnpm --registry=http://npm.f2e.mogujie.org --registryweb=http//webnpm.f2e.mogujie.org'
alias sudomnpm='sudo cnpm --registry=http://npm.f2e.mogujie.org --registryweb=http//webnpm.f2e.mogujie.org'

alias mongod='mongod --config /usr/local/etc/mongod.conf'
alias mongo-start="launchctl start org.mongodb.mongod"
alias mongo-stop="launchctl stop org.mongodb.mongod"


export UPDATE_ZSH_DAYS=3

source $ZSH/oh-my-zsh.sh

# Customize to your needs...
## use the vi navigation keys (hjkl) besides cursor keys in menu completion
bindkey -M menuselect 'h' vi-backward-char        # left
bindkey -M menuselect 'k' vi-up-line-or-history   # up
bindkey -M menuselect 'l' vi-forward-char         # right
bindkey -M menuselect 'j' vi-down-line-or-history # bottom

## translate
alias u='translate -i'

# set autojump
[[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh

# 设置语言编码
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

export CLICOLOR=1


# 连续输入相同的命令，历史纪录里只保留一个
setopt HIST_IGNORE_DUPS
setopt EXTENDED_HISTORY

# 命令前加空格不会纪录到历史中
setopt HIST_IGNORE_SPACE

autoload -Uz compinit
compinit -u


# alias
alias sell="cd ~/project/merchant-training/deploy-web/src/main/webapp/seller-train"


export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
export ANDROID_HOME=/usr/local/opt/android-sdk






















[user]
	name = huangcheng
	email = "921365631@qq.com"
[core]
	excludesfile = /Users/huangcheng/.gitignore_global
	  quotepath = false
  autocrlf = input
[difftool "sourcetree"]
	cmd = opendiff \"$LOCAL\" \"$REMOTE\"
	path = 
[mergetool "sourcetree"]
	cmd = /Applications/SourceTree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\" \"$REMOTE\" -ancestor \"$BASE\" -merge \"$MERGED\"
	trustExitCode = true
[http]
  sslVerify = false
[credential]
  helper = osxkeychain
[push]
  default = matching
[color]
  ui = true
  status = true
  branch = true
  interactive = true
  diff = true

[filter "media"]
  clean = git media clean %f
  smudge = git media smudge %f
  required = true
[rerere]
  enabled = true
[mergetool]
  keepBackup = true
[alias]
  st = status -s
  ci = commit -m
  l = log --online --decorate -12 --color
  ll = log --online --decorate --color
  lc = log --grap --color
  br = branch
  co = checkout
  rb = rebase
  dci = dcommit
  sbi = submodule init
  sbu = submodule update
  sbp = submodule foreach git pull
  sbc = submodule foreach git co master
[apply]
  whitespace = nowarn
[i18n]
  commitencoding = utf-8
  logoutputencoding = utf-8
[gui]
  encoding = utf-8
[branch]
	autosetuprebase = never

